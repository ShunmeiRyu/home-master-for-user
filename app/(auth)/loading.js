import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function Loading() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AutorenewIcon className="text-sunglow-100 animate-spin" sx={{ fontSize: 55 }} />
        </div>
    )
}