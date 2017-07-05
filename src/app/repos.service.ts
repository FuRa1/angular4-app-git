import {Injectable} from '@angular/core';
import {Repo} from './class/repo';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ReposService {
    private gitHubApi = 'https://api.github.com';

    constructor(private http: Http) {
    }

    getRepos(userName: string): Promise<Repo[]> {
        const url = `${this.gitHubApi}/users/${userName}/repos`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                console.log(response.json());
                return response.json() as Repo[]
            })
            .catch(this.handleError);
    }

    // getRepo(id: string): Promise<Repo> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as Hero)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
