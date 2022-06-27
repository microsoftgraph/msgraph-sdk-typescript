import {createWin32LobAppInstallExperienceFromDiscriminatorValue} from './createWin32LobAppInstallExperienceFromDiscriminatorValue';
import {createWin32LobAppMsiInformationFromDiscriminatorValue} from './createWin32LobAppMsiInformationFromDiscriminatorValue';
import {createWin32LobAppReturnCodeFromDiscriminatorValue} from './createWin32LobAppReturnCodeFromDiscriminatorValue';
import {createWin32LobAppRuleFromDiscriminatorValue} from './createWin32LobAppRuleFromDiscriminatorValue';
import {MobileLobAppImpl, Win32LobAppInstallExperienceImpl, Win32LobAppMsiInformationImpl, Win32LobAppReturnCodeImpl, Win32LobAppRuleImpl} from './index';
import {Win32LobApp} from './win32LobApp';
import {Win32LobAppInstallExperience} from './win32LobAppInstallExperience';
import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppReturnCode} from './win32LobAppReturnCode';
import {Win32LobAppRule} from './win32LobAppRule';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppImpl extends MobileLobAppImpl implements Win32LobApp {
    /** The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64. */
    public applicableArchitectures?: WindowsArchitecture | undefined;
    /** The command line to install this app */
    public installCommandLine?: string | undefined;
    /** The install experience for this app. */
    public installExperience?: Win32LobAppInstallExperience | undefined;
    /** The value for the minimum CPU speed which is required to install this app. */
    public minimumCpuSpeedInMHz?: number | undefined;
    /** The value for the minimum free disk space which is required to install this app. */
    public minimumFreeDiskSpaceInMB?: number | undefined;
    /** The value for the minimum physical memory which is required to install this app. */
    public minimumMemoryInMB?: number | undefined;
    /** The value for the minimum number of processors which is required to install this app. */
    public minimumNumberOfProcessors?: number | undefined;
    /** The value for the minimum supported windows release. */
    public minimumSupportedWindowsRelease?: string | undefined;
    /** The MSI details if this Win32 app is an MSI app. */
    public msiInformation?: Win32LobAppMsiInformation | undefined;
    /** The return codes for post installation behavior. */
    public returnCodes?: Win32LobAppReturnCode[] | undefined;
    /** The detection and requirement rules for this app. */
    public rules?: Win32LobAppRule[] | undefined;
    /** The relative path of the setup file in the encrypted Win32LobApp package. */
    public setupFilePath?: string | undefined;
    /** The command line to uninstall this app */
    public uninstallCommandLine?: string | undefined;
    /**
     * Instantiates a new Win32LobApp and sets the default values.
     * @param win32LobAppParameterValue 
     */
    public constructor(win32LobAppParameterValue?: Win32LobApp | undefined) {
        super(win32LobAppParameterValue);
        this.applicableArchitectures = win32LobAppParameterValue?.applicableArchitectures;
        this.installCommandLine = win32LobAppParameterValue?.installCommandLine;
        this.installExperience = win32LobAppParameterValue?.installExperience instanceof Win32LobAppInstallExperienceImpl? win32LobAppParameterValue?.installExperience:new Win32LobAppInstallExperienceImpl(win32LobAppParameterValue?.installExperience);
        this.minimumCpuSpeedInMHz = win32LobAppParameterValue?.minimumCpuSpeedInMHz;
        this.minimumFreeDiskSpaceInMB = win32LobAppParameterValue?.minimumFreeDiskSpaceInMB;
        this.minimumMemoryInMB = win32LobAppParameterValue?.minimumMemoryInMB;
        this.minimumNumberOfProcessors = win32LobAppParameterValue?.minimumNumberOfProcessors;
        this.minimumSupportedWindowsRelease = win32LobAppParameterValue?.minimumSupportedWindowsRelease;
        this.msiInformation = win32LobAppParameterValue?.msiInformation instanceof Win32LobAppMsiInformationImpl? win32LobAppParameterValue?.msiInformation:new Win32LobAppMsiInformationImpl(win32LobAppParameterValue?.msiInformation);
        const returnCodesArrValue: Win32LobAppReturnCodeImpl[] = []; win32LobAppParameterValue.returnCodes?.forEach(element => {returnCodesArrValue.push(element instanceof Win32LobAppReturnCodeImpl? element : new Win32LobAppReturnCodeImpl(element));});
        this.returnCodes = returnCodesArrValue;
        const rulesArrValue: Win32LobAppRuleImpl[] = []; win32LobAppParameterValue.rules?.forEach(element => {rulesArrValue.push(element instanceof Win32LobAppRuleImpl? element : new Win32LobAppRuleImpl(element));});
        this.rules = rulesArrValue;
        this.setupFilePath = win32LobAppParameterValue?.setupFilePath;
        this.uninstallCommandLine = win32LobAppParameterValue?.uninstallCommandLine;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableArchitectures": n => { this.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
            "installCommandLine": n => { this.installCommandLine = n.getStringValue(); },
            "installExperience": n => { this.installExperience = n.getObjectValue<Win32LobAppInstallExperienceImpl>(createWin32LobAppInstallExperienceFromDiscriminatorValue); },
            "minimumCpuSpeedInMHz": n => { this.minimumCpuSpeedInMHz = n.getNumberValue(); },
            "minimumFreeDiskSpaceInMB": n => { this.minimumFreeDiskSpaceInMB = n.getNumberValue(); },
            "minimumMemoryInMB": n => { this.minimumMemoryInMB = n.getNumberValue(); },
            "minimumNumberOfProcessors": n => { this.minimumNumberOfProcessors = n.getNumberValue(); },
            "minimumSupportedWindowsRelease": n => { this.minimumSupportedWindowsRelease = n.getStringValue(); },
            "msiInformation": n => { this.msiInformation = n.getObjectValue<Win32LobAppMsiInformationImpl>(createWin32LobAppMsiInformationFromDiscriminatorValue); },
            "returnCodes": n => { this.returnCodes = n.getCollectionOfObjectValues<Win32LobAppReturnCodeImpl>(createWin32LobAppReturnCodeFromDiscriminatorValue); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<Win32LobAppRuleImpl>(createWin32LobAppRuleFromDiscriminatorValue); },
            "setupFilePath": n => { this.setupFilePath = n.getStringValue(); },
            "uninstallCommandLine": n => { this.uninstallCommandLine = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicableArchitectures){
            writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", this.applicableArchitectures);
        }
        if(this.installCommandLine){
            writer.writeStringValue("installCommandLine", this.installCommandLine);
        }
        if(this.installExperience){
            writer.writeObjectValue<Win32LobAppInstallExperienceImpl>("installExperience", new Win32LobAppInstallExperienceImpl(this.installExperience));
        }
        if(this.minimumCpuSpeedInMHz){
            writer.writeNumberValue("minimumCpuSpeedInMHz", this.minimumCpuSpeedInMHz);
        }
        if(this.minimumFreeDiskSpaceInMB){
            writer.writeNumberValue("minimumFreeDiskSpaceInMB", this.minimumFreeDiskSpaceInMB);
        }
        if(this.minimumMemoryInMB){
            writer.writeNumberValue("minimumMemoryInMB", this.minimumMemoryInMB);
        }
        if(this.minimumNumberOfProcessors){
            writer.writeNumberValue("minimumNumberOfProcessors", this.minimumNumberOfProcessors);
        }
        if(this.minimumSupportedWindowsRelease){
            writer.writeStringValue("minimumSupportedWindowsRelease", this.minimumSupportedWindowsRelease);
        }
        if(this.msiInformation){
            writer.writeObjectValue<Win32LobAppMsiInformationImpl>("msiInformation", new Win32LobAppMsiInformationImpl(this.msiInformation));
        }
        if(this.returnCodes && this.returnCodes.length != 0){        const returnCodesArrValue: Win32LobAppReturnCodeImpl[] = []; this.returnCodes?.forEach(element => {returnCodesArrValue.push(element instanceof Win32LobAppReturnCodeImpl? element : new Win32LobAppReturnCodeImpl(element));});
            writer.writeCollectionOfObjectValues<Win32LobAppReturnCodeImpl>("returnCodes", returnCodesArrValue);
        }
        if(this.rules && this.rules.length != 0){        const rulesArrValue: Win32LobAppRuleImpl[] = []; this.rules?.forEach(element => {rulesArrValue.push(element instanceof Win32LobAppRuleImpl? element : new Win32LobAppRuleImpl(element));});
            writer.writeCollectionOfObjectValues<Win32LobAppRuleImpl>("rules", rulesArrValue);
        }
        if(this.setupFilePath){
            writer.writeStringValue("setupFilePath", this.setupFilePath);
        }
        if(this.uninstallCommandLine){
            writer.writeStringValue("uninstallCommandLine", this.uninstallCommandLine);
        }
    };
}
