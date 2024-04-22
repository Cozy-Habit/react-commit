import { useParams } from "react-router-dom";
import useCommit from "../useCommit";

export default function Detail() {
    const { owner, repo, sha } = useParams();
    const commits = useCommit({owner:owner ?? "facebook", repo:repo ?? "react", sha:sha ?? "5b903cdaa94c78e8fabb985d8daca5bd7d266323"});

    console.log(commits);
    return (
        <>
            {
                commits && <div>

                    <p>{commits.data.commit.author?.name}</p>
                    <p>{commits.data.commit.committer?.date}</p>
                    <p>{commits.data.commit.message}</p>
                    <p>{commits.data.stats?.additions}</p>
                    <p>{commits.data.stats?.deletions}</p>
                    <p>{commits.data.stats?.total}</p>
                    
                    {commits.data.files && commits.data.files?.map((file) => {
                        return <>
                                <p>{file.filename}</p>
                                <p>{file.additions}</p>
                                <p>{file.deletions}</p>
                                <p>{file.changes}</p>
                            </>
                    })}
                </div>
            }
        </>
    );
}