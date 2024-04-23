import { useParams } from "react-router-dom";
import useCommit from "../useCommit";

function DetailComponent({owner, repo, sha}: {owner:string, repo:string, sha:string}){
    
    const commits = useCommit({owner:owner, repo:repo, sha:sha});

    console.log(commits);

    return (
        <>
            {
                commits && <div>

                    <p><strong>Author:</strong> {commits.data.commit.author?.name}</p>
                    <p><strong>Date:</strong> {commits.data.commit.committer?.date}</p>
                    <p><strong>Message:</strong> {commits.data.commit.message}</p>
                    <p><strong>Totla Additions:</strong> {commits.data.stats?.additions}</p>
                    <p><strong>Total Deletions:</strong> {commits.data.stats?.deletions}</p>
                    <p><strong>Total Files Changed:</strong> {commits.data.stats?.total}</p>
                    
                    {commits.data.files && commits.data.files?.map((file) => {
                        return <>
                                <p><strong>Filename:</strong> {file.filename}</p>
                                <p><strong>Additions:</strong> {file.additions}</p>
                                <p><strong>Deletions:</strong> {file.deletions}</p>
                                <p><strong>Total changes:</strong> {file.changes}</p>
                            </>
                    })}
                </div>
            }
        </>
    );

}


export default function Detail() {
    const params = useParams();

    const owner = params.owner;
    const repo = params.repo;
    const sha = params.sha;

    if(owner == undefined || repo == undefined || sha == undefined){
        return <div>Owner not found</div>
    }

    return(
        <DetailComponent owner={owner} repo={repo} sha={sha} />
    );

}