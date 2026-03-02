@REM ===========================================================================
@REM Maven Wrapper startup batch script
@REM ===========================================================================
@IF "%OS%"=="Windows_NT" @setlocal
@set WRAPPER_JAR="%~dp0\.mvn\wrapper\maven-wrapper.jar"
@set WRAPPER_URL="https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar"

@IF NOT EXIST %WRAPPER_JAR% (
    echo Downloading Maven Wrapper...
    powershell -Command "Invoke-WebRequest -Uri %WRAPPER_URL% -OutFile %WRAPPER_JAR%"
)

@FOR /F "usebackq tokens=1,2 delims==" %%A IN ("%~dp0\.mvn\wrapper\maven-wrapper.properties") DO @IF "%%A"=="distributionUrl" SET MAVEN_DIST_URL=%%B

java -jar %WRAPPER_JAR% %*
