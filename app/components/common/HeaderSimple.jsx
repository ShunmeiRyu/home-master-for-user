import HomeIcon from '@mui/icons-material/Home';

export default function HeaderSimple() {
    return (
        <div className="flex items-center h-16 pl-4 py-3">
            <HomeIcon color="primary" sx={{ fontSize: 40 }} />
        </div>
    )
}