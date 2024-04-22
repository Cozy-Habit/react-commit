import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCommits from "../useCommits";

export default function Overview() {
    const { owner, repo } = useParams();
    const commits = useCommits({owner: owner ?? "facebook", repo: repo ?? "react"});
    useEffect(() => {
        console.log(commits);
    }, [commits]);
    
    return (
        <div>
            <h1>Overview</h1>
            <p>Owner: {owner}</p>
            <p>Repo: {repo}</p>
            <ul>
            {commits &&   commits.data.map((commit) => {
                return (
                    <li key={commit.sha}>
                        <h2>{commit.commit.author?.name} <a href={`/${owner}/${repo}/commits/${commit.sha}`}>to commit detail</a></h2>
                        <p>{commit.commit.message}</p>

                     </li>
                );
            })
            }
            </ul>
        </div>
    );
}