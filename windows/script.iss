; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{DD625C30-A6B1-4C48-A3C2-19B39771028F}
AppName=QVD Client
AppVerName=QVD Client
AppPublisher=QindelGroup
AppPublisherURL=http://qvd.qindel.com/
AppSupportURL=http://qvd.qindel.com/
AppUpdatesURL=http://qvd.qindel.com/
DefaultDirName={pf}\QVD
DisableDirPage=yes
DefaultGroupName=QVD Client
DisableProgramGroupPage=yes
OutputBaseFilename=setup
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "installer\system32\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "installer\Xming\*"; DestDir: "{app}\Xming"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "installer\QVD-Client\*"; DestDir: "{app}\QVD-Client"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "installer\qvd-client.exe"; DestDir: "{app}"; Flags: ignoreversion
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{group}\QVD Client"; Filename: "{app}\qvd-client.exe"; WorkingDir: "{app}"
Name: "{commondesktop}\QVD Client"; Filename: "{app}\qvd-client.exe"; WorkingDir: "{app}"; Tasks: desktopicon

[Registry]
Root: HKCU; Subkey: "Environment"; ValueType:string; ValueName:"DISPLAY"; ValueData:"127.0.0.1:0.0"
Root: HKCU; Subkey: "Environment"; ValueType:string; ValueName:"NX_ROOT"; ValueData:{app}
