import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit(
    {auth: import.meta.env.VITE_GITHUBAPI}
);

export default function useCommit({owner, repo, sha}: {owner:string, repo:string, sha:string}){

    const [commit, setCommit] = useState<Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"]>();

    useEffect(() => {
        octokit.rest.repos.getCommit({owner:owner,repo:repo,ref:sha}).then((response) => {
            setCommit(response);
        });
    },[owner, repo, sha]);

    return commit;
}