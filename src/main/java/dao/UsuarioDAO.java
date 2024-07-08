package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import conexion.ConexionDB;
import java.sql.Date;
import modelo.Usuario;

public class UsuarioDAO {
    //TODO: ver si no pueden ser metodos estaticos

    private Usuario extraerUsuarioDeResultSet(ResultSet resultSet) throws Exception {
        String nombre = resultSet.getString("nombre");
        String apellido = resultSet.getString("apellido");
        String email = resultSet.getString("email");
        String password = resultSet.getString("password");
        Date fechaNacimiento = resultSet.getDate("fechaNacimiento");
        String pais = resultSet.getString("pais");
        
        Usuario usuario = new Usuario(nombre, apellido, email, password, fechaNacimiento, pais);
        usuario.setId(resultSet.getInt("id"));
        return usuario;
    }
    
    public boolean insertarUsuario(Usuario usuario) {
        String query = "INSERT INTO registroUsuarios (nombre, apellido, email, password, fechaNacimiento, pais) VALUES (?, ?, ?, ?, ?, ?)";

        try (Connection dbConnection = ConexionDB.obtenerConexion();
             PreparedStatement p_statement = dbConnection.prepareStatement(query)) {
            
            p_statement.setString(1, usuario.getNombre());
            p_statement.setString(2, usuario.getApellido());
            p_statement.setString(3, usuario.getEmail());
            p_statement.setString(4, usuario.getPassword());
            p_statement.setDate(5, usuario.getFechaNacimiento());
            p_statement.setString(6, usuario.getPais());

            int filasAfectadas = p_statement.executeUpdate();
            return filasAfectadas > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<Usuario> obtenerTodos() {
        List<Usuario> usuarios = new ArrayList<>();
        String query = "SELECT * FROM registroUsuarios";
        
        try (Connection dbConnection = ConexionDB.obtenerConexion();
             Statement statement = dbConnection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {
            
            while (resultSet.next()) {
                Usuario usuario = extraerUsuarioDeResultSet(resultSet);
                usuarios.add(usuario);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return usuarios;
    }

    public Usuario obtenerPorId(int id) {
        String query = "SELECT * FROM registroUsuarios WHERE id = ?";
        try (Connection dbConnection = ConexionDB.obtenerConexion();
             PreparedStatement p_statement = dbConnection.prepareStatement(query)) {
            
            p_statement.setInt(1, id);
            try (ResultSet resultSet = p_statement.executeQuery()) {
                if (resultSet.next()) {
                    return extraerUsuarioDeResultSet(resultSet);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public boolean modificar(Usuario usuario) {
        String query = "UPDATE registroUsuarios SET nombre = ?, apellido = ?, email = ?, password = ?, fechaNacimiento = ?, pais = ? WHERE id = ?";
        try (Connection dbConnection = ConexionDB.obtenerConexion();
             PreparedStatement p_statement = dbConnection.prepareStatement(query)) {
            
            p_statement.setString(1, usuario.getNombre());
            p_statement.setString(2, usuario.getApellido());
            p_statement.setString(3, usuario.getEmail());
            p_statement.setString(4, usuario.getPassword());
            p_statement.setDate(5, usuario.getFechaNacimiento());
            p_statement.setString(6, usuario.getPais());
            p_statement.setInt(7, usuario.getId());
            
            int filasAfectadas = p_statement.executeUpdate();
            return filasAfectadas > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean eliminar(int id) {
        String query = "DELETE FROM registroUsuarios WHERE id = ?";
        try (Connection dbConnection = ConexionDB.obtenerConexion();
             PreparedStatement p_statement = dbConnection.prepareStatement(query)) {
            
            p_statement.setInt(1, id);
            int filasAfectadas = p_statement.executeUpdate();
            return filasAfectadas > 0;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}