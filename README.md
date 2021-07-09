# ngDashboard

Business intelligence dashboard application using .NET Core with PostgreSQL and Angular.

<p align="center">
  <img src="https://res.cloudinary.com/dbpwbtkis/image/upload/v1625872006/2021-07-09_190412_gvy84c.png" />
</p>

## Requeriments
- [.NET Core](https://dotnet.microsoft.com/download/dotnet/3.1)
- [PostgreSQL](https://www.postgresql.org/)
- [Angular](https://angular.io/guide/setup-local)

## Getting Started 🚀

### Backend

```
cd api/
dotnet tool install --global dotnet-ef
dotnet ef database update
dotnet build
dotnet run
```

Then go to `http://localhost:5001/api/customer`

### Frontend

```
cd dashboard/
npm install
ng serve
```

Then navigate to `http://localhost:4200/`


