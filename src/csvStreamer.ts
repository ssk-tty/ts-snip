import {Stringifier} from 'csv-stringify/dist/cjs';
import {stringify} from 'csv-stringify';
import {Options} from 'csv-stringify/dist/cjs';
import {Response} from 'express';

export class CsvStreamer {
  private readonly stringifier: Stringifier;

  constructor(option: Options) {
    this.stringifier = stringify(option);
  }

  /**
   * write stream to response
   * @param res
   */
  writeToResponse = (res: Response) => <T>(data: T[], fileName: string): void => {
    res = this.setHeaders(res)(fileName);

    const ss = this.stringifier
      .on('readable', () => {
        let row: string;

        while((row = ss.read() as string)) {
          res.write(row);
        }

        res.end();
      });

    data
      .forEach(d => ss.write(d));

    ss.end();
  };

  /**
   * set response headers to return csv files
   * @param res
   */
  private setHeaders = (res: Response) => (fileName: string): Response =>
    res
      .setHeader('Content-disposition', `attachment; filename=${fileName}.csv`)
      .setHeader('Content-Type', 'text/csv; charset=UTF-8');
}
