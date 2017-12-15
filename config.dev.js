const path = require('path'),
    root_path = path.join(path.dirname(__dirname), "nodejs");

module.exports = {
    "mysql": {
        "host": "127.0.0.1",
        "user": "root",
        "password": "abc123",
        "database": "crawl",
        "multipleStatements": true
    },
    "log4js": {
        "appenders": {
            "jin10": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/jin10.log")
            },
            "message": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/message.log")
            },
            "fx678": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/fx678.log")
            },
            "wallstreet": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/wallstreet.log")
            },
            "btctrade": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/btctrade.log")
            },
            "jin10rili": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/jin10rili.log")
            },
            "jin10report": {
                "type": "dateFile",
                "filename": path.join(root_path, "logs/jin10report.log")
            }
        },
        "categories": {
            "default": { "appenders": ["jin10"], "level": "info" },
            "message": { appenders: ['message'], level: 'info' },
            "fx678": { appenders: ['fx678'], level: 'info' },
            "wallstreet": { appenders: ['wallstreet'], level: 'info' },
            "btctrade": { appenders: ['btctrade'], level: 'info' },
            "jin10rili": { appenders: ['jin10rili'], level: 'info' },
            "jin10report": { appenders: ['jin10report'], level: 'info' },
        }
    },
    "crawl": {
        "download_dir": path.join(root_path, "images"),
        "yaml_dir": path.join(root_path, "source"),
        "yaml_root": "scsj.yml",
        "detail_dir": path.join(root_path, "detail")
    },
    "redis": {
        "server": "127.0.0.1",
        "port": "6379"
    },
    "jin10_server_addr": ['https://sshcdhpjfh.jin10.com:8080','https://sshibioeed.jin10.com:8082','https://sshibiealf.jin10.com:8081','https://sshibidkfk.jin10.com:8080','https://sshcdhpjle.jin10.com:8083','https://sshcdhpjne.jin10.com:8081','https://sshcdhgemp.jin10.com:8081','https://sshcdhpjnm.jin10.com:8081','https://sshibidkfk.jin10.com:8082','https://sshaekhdha.jin10.com:8083','https://sshcdhpjnm.jin10.com:8080','https://sshcdhpjig.jin10.com:8082','https://sshcdhpjod.jin10.com:8082','https://sshcdhgjaf.jin10.com:8083','https://sshibjpiog.jin10.com:8082','https://sshibjpiog.jin10.com:8081','https://sshahmgghj.jin10.com:8080','https://sshcdhpjig.jin10.com:8083','https://sshcdhpjig.jin10.com:8080','https://sshcdhpjeg.jin10.com:8081','https://sshcdhpjdf.jin10.com:8083','https://sshcdhpjeg.jin10.com:8080','https://sshcdhpjii.jin10.com:8080','https://sshcdhpjkl.jin10.com:8083','https://sshcdhpjfo.jin10.com:8082','https://sshcdhpjdf.jin10.com:8082','https://sshcdhpjfo.jin10.com:8080','https://sshcdhpjnb.jin10.com:8083','https://sshcdhpjfh.jin10.com:8082','https://sshcdhpjoj.jin10.com:8083','https://sshibiealf.jin10.com:8080','https://sshcdhpjne.jin10.com:8083','https://sshcdhpipi.jin10.com:8080','https://sshiemhiae.jin10.com:8080','https://sshcdhpjib.jin10.com:8080','https://sshibjgkdk.jin10.com:8080','https://sshaekhdha.jin10.com:8080','https://sshcdhpjnb.jin10.com:8081','https://sshahmgghj.jin10.com:8081','https://sshcdhpjnb.jin10.com:8080'],
    "jin10_rili_addr": ["https://sshibllmpl.jin10.com:8082", "https://sshdbnmicj.jin10.com:8080", "https://sshcnhncjb.jin10.com:8080", "https://sshdbnmicj.jin10.com:8084", "https://sshiblmaop.jin10.com:8087", "https://sshjcibcfh.jin10.com:8082", "https://sshiblmaop.jin10.com:8080", "https://sshibllmpl.jin10.com:8086", "https://sshcdhccba.jin10.com:8085", "https://sshibllned.jin10.com:8085", "https://sshcdhccba.jin10.com:8080", "https://sshibllned.jin10.com:8080", "https://sshibkpbhe.jin10.com:8085", "https://sshcdhccba.jin10.com:8087", "https://sshibllmpl.jin10.com:8084", "https://sshjcibcfh.jin10.com:8084", "https://sshcnhncjb.jin10.com:8084", "https://sshibllmpl.jin10.com:8083", "https://sshibllned.jin10.com:8083", "https://sshcdhccba.jin10.com:8083", "https://sshcnhncjb.jin10.com:8081", "https://sshcnhncjb.jin10.com:8082", "https://sshiblmaop.jin10.com:8083", "https://sshibkpbhe.jin10.com:8083", "https://sshjcibcfh.jin10.com:8080", "https://sshjcibcfh.jin10.com:8085", "https://sshibllned.jin10.com:8087", "https://sshibllned.jin10.com:8082", "https://sshcnhncjb.jin10.com:8085", "https://sshcnhncjb.jin10.com:8087", "https://sshibkpbhe.jin10.com:8084", "https://sshdbnmicj.jin10.com:8081", "https://sshdbnmicj.jin10.com:8087", "https://sshcnhncjb.jin10.com:8086", "https://sshcdhccba.jin10.com:8084", "https://sshdbnmicj.jin10.com:8082", "https://sshdbnmicj.jin10.com:8083", "https://sshcdhccba.jin10.com:8081", "https://sshiblmaop.jin10.com:8085", "https://sshdbnmicj.jin10.com:8085"],
}