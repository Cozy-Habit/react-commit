import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useCommits from "../useCommits";

function OverviewComponent({owner, repo}: {owner:string, repo:string}){
    
    const commits = useCommits({owner: owner, repo: repo});
    useEffect(() => {
        console.log(commits);
    }, [commits]);
    
    return (
        <div>
            <h1>Overview</h1>
            <p>Owner: {owner}</p>
            <p>Repo: {repo}</p>
            <ul>
            {commits && commits.data.map((commit) => {
                return (
                    <li key={commit.sha}>
                        <h2>{commit.commit.author?.name} <Link to={`/${owner}/${repo}/commits/${commit.sha}`}>to commit detail</Link></h2>
                        <p>{commit.commit.message}</p>
                     </li>
                );
            })
            }
            </ul>
        </div>
    );
}

export default function Overview() {
    const params = useParams();

    const owner = params.owner;
    const repo = params.repo;

    if(owner == undefined || repo == undefined){
        return <div>Owner not found</div>
    }

    return(
        <OverviewComponent owner={owner} repo={repo}/>
    );
}