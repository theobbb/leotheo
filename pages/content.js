import { Toolbar, Typography } from "@mui/material";
import Layout from "@layouts/main";
import { withAuth } from "../utils/withAuth";

export default function Content() {
    return (
        <Layout>
            <Toolbar><Typography variant="h4">Content</Typography></Toolbar>
            
            
        </Layout>
    )
}
