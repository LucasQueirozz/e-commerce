import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ produto, width }) {
    return (
      <Card sx={{ width }}>
        <CardMedia
          sx={{ height: 140 }}
          image={produto.img}
          title={produto.nome}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">{produto.nome}</Typography>
        </CardContent>
        <CardActions>
          <Typography gutterBottom variant="body1" component="div">R$ {produto.preco}</Typography>
        </CardActions>
      </Card>
    );
  }