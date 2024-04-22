import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit();

export default function useCommits({owner, repo }: {owner: string, repo: string}) {
    const [commits, setCommits] = useState<Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]>();
    useEffect(() => {
        octokit.rest.repos.listCommits({owner, repo}).then((response) => {
            setCommits(response);
        });
    }, [owner, repo])
    return commits; 
}