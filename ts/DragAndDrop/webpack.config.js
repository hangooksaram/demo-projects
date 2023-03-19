//development workflow

//절대경로 필요. path 모듈 필요
const path = require('path');

module.exports = {
    //어느 파일에서 프로젝트가 시작 되는 가. entry point (시작 지점)
    entry : './src/app.ts',
    mode : 'development',

    //마지막에 생성되는 하나의 js 파일
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'dist'), // dist 폴더로의 절대 경로를 구축하게 하고, webpack 은 그것을 사용해 output 을 write 하게 됨
        // __dirname : 특수 상수. node js 환경, node js 사용하는 webpack 에서 전역적으로 사용 가능.

        //dist 가 아닌 /dist/ 필요!!
        publicPath : '/dist/'
    },

    //브라우저에서 디버깅 가능
    devtool: 'inline-source-map',

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
    }


    //entry point 의 파일에서 import 하는 파일을 파악 -> 그 파일들에서 import 된 파일들 파악 -> 그 파일들에서 import 된 파일들 파악 -> ...

    //그 다음 파일의 내용 파악

    //그 다음 ts-loader 의 도움을 받아 컴파일
}