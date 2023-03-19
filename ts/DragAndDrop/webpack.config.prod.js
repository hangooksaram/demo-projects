//production workflow

//절대경로 필요. path 모듈 필요
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    //어느 파일에서 프로젝트가 시작 되는 가. entry point (시작 지점)
    entry : './src/app.ts',
    mode : 'production',

    //마지막에 생성되는 하나의 js 파일
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'), // dist 폴더로의 절대 경로를 구축하게 하고, webpack 은 그것을 사용해 output 을 write 하게 됨
        // __dirname : 특수 상수. node js 환경, node js 사용하는 webpack 에서 전역적으로 사용 가능.

        //development 환경에서 필요했기 때문에 삭제
        //publicPath : '/dist/'
    },

    //production 환경에서 는 필요하지 않기 때문에 none 으로 변경
    // devtool: 'none',

    //devServer config 추가 필요!! 강의에 없음
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    //webpack 에게 app.ts 등과 같이 프로젝트에서 찾은 모든 파일들, 그 파일 들 내의 import 한 파일들을 어떻게 처리할 것인지 (loader 로) 알려줌.
    module: {
        //특정 파일들에 적용 될 수 있는 여러개 의 rule 들
        rules: [
            {
                test: /\.ts$/, // 규칙이 어떤 파일에 적용되는 지
                use: 'ts-loader', // 파일들에 ts-loader 를 사용 해 처리 하겠다
                exclude : /node-moudles/ // 이 파일은 제외 하겠다      
            }
        ]
    },

    //찾아낸 import 된 파일 확장자를 webpack 에 전달
    resolve:{
        extensions : ['.ts', '.js']
    },

    plugins:[
        new CleanPlugin.CleanWebpackPlugin() // dist 폴더 내의 번들링 파일을 삭제해 최신 파일로 유지
    ]

    
}