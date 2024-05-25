import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `http://localhost:3000`;
  resourceEndpoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}

  /**
   * Handles HTTP errors.
   * @param {HttpErrorResponse} error - The HTTP error response.
   * @returns {Observable<Error>} An observable throwing an error with a custom message.
   */
  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful response error code returned from backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  /**
   * Constructs the resource path.
   * @private
   * @returns {string} The full resource path.
   */
  private resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  /**
   * Creates a new resource item.
   * @param {any} item - The item to create.
   * @returns {Observable<T>} An observable of the created item.
   */
  create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Deletes a resource item by ID.
   * @param {any} id - The ID of the item to delete.
   * @returns {Observable<any>} An observable of the delete operation.
   */
  delete(id: any) {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Updates a resource item by ID.
   * @param {any} id - The ID of the item to update.
   * @param {any} item - The updated item data.
   * @returns {Observable<T>} An observable of the updated item.
   */
  update(id: any, item: any) {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Retrieves all resource items.
   * @returns {Observable<T[]>} An observable of the list of items.
   */
  getAll() {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Retrieves a resource item by ID.
   * @param {any} id - The ID of the item to retrieve.
   * @returns {Observable<T>} An observable of the retrieved item.
   */
  getById(id: any) {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}
