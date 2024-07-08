package dao;

import conexion.ConexionDB;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao { 
    //TODO: cambiar para que no se instancie, que sea un método estático
    //TODO: cambiar el nombre de la clase a algo relacionado a validar usuario

    public boolean validarUsuario(String email, String password) {
        boolean validar = false;

        String sql = "SELECT * FROM login WHERE email = ? AND password = ?";

        try {
            //obtenemos la conexion
            Connection conexion = ConexionDB.obtenerConexion();
            //preparar la consulta
            PreparedStatement consulta = conexion.prepareStatement(sql);
            //argumentos
            consulta.setString(1, email);
            consulta.setString(2, password);
            //ejecutar la consulta
            ResultSet resultado = consulta.executeQuery();
            
            validar = resultado.next();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return validar;
    }
}
