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
    private _applicableArchitectures?: WindowsArchitecture | undefined;
    /** The command line to install this app */
    private _installCommandLine?: string | undefined;
    /** The install experience for this app. */
    private _installExperience?: Win32LobAppInstallExperience | undefined;
    /** The value for the minimum CPU speed which is required to install this app. */
    private _minimumCpuSpeedInMHz?: number | undefined;
    /** The value for the minimum free disk space which is required to install this app. */
    private _minimumFreeDiskSpaceInMB?: number | undefined;
    /** The value for the minimum physical memory which is required to install this app. */
    private _minimumMemoryInMB?: number | undefined;
    /** The value for the minimum number of processors which is required to install this app. */
    private _minimumNumberOfProcessors?: number | undefined;
    /** The value for the minimum supported windows release. */
    private _minimumSupportedWindowsRelease?: string | undefined;
    /** The MSI details if this Win32 app is an MSI app. */
    private _msiInformation?: Win32LobAppMsiInformation | undefined;
    /** The return codes for post installation behavior. */
    private _returnCodes?: Win32LobAppReturnCode[] | undefined;
    /** The detection and requirement rules for this app. */
    private _rules?: Win32LobAppRule[] | undefined;
    /** The relative path of the setup file in the encrypted Win32LobApp package. */
    private _setupFilePath?: string | undefined;
    /** The command line to uninstall this app */
    private _uninstallCommandLine?: string | undefined;
    /**
     * Gets the applicableArchitectures property value. The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64.
     * @returns a windowsArchitecture
     */
    public get applicableArchitectures() {
        return this._applicableArchitectures;
    };
    /**
     * Sets the applicableArchitectures property value. The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64.
     * @param value Value to set for the applicableArchitectures property.
     */
    public set applicableArchitectures(value: WindowsArchitecture | undefined) {
        if(value) {
            this._applicableArchitectures = value;
        }
    };
    /**
     * Instantiates a new Win32LobApp and sets the default values.
     * @param win32LobAppParameterValue 
     */
    public constructor(win32LobAppParameterValue?: Win32LobApp | undefined) {
        super(win32LobAppParameterValue);
        this._applicableArchitectures = win32LobAppParameterValue?.applicableArchitectures;
        this._installCommandLine = win32LobAppParameterValue?.installCommandLine;
        this._installExperience = win32LobAppParameterValue?.installExperience;
        this._minimumCpuSpeedInMHz = win32LobAppParameterValue?.minimumCpuSpeedInMHz;
        this._minimumFreeDiskSpaceInMB = win32LobAppParameterValue?.minimumFreeDiskSpaceInMB;
        this._minimumMemoryInMB = win32LobAppParameterValue?.minimumMemoryInMB;
        this._minimumNumberOfProcessors = win32LobAppParameterValue?.minimumNumberOfProcessors;
        this._minimumSupportedWindowsRelease = win32LobAppParameterValue?.minimumSupportedWindowsRelease;
        this._msiInformation = win32LobAppParameterValue?.msiInformation;
        this._returnCodes = win32LobAppParameterValue?.returnCodes;
        this._rules = win32LobAppParameterValue?.rules;
        this._setupFilePath = win32LobAppParameterValue?.setupFilePath;
        this._uninstallCommandLine = win32LobAppParameterValue?.uninstallCommandLine;
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
     * Gets the installCommandLine property value. The command line to install this app
     * @returns a string
     */
    public get installCommandLine() {
        return this._installCommandLine;
    };
    /**
     * Sets the installCommandLine property value. The command line to install this app
     * @param value Value to set for the installCommandLine property.
     */
    public set installCommandLine(value: string | undefined) {
        if(value) {
            this._installCommandLine = value;
        }
    };
    /**
     * Gets the installExperience property value. The install experience for this app.
     * @returns a Win32LobAppInstallExperienceInterface
     */
    public get installExperience() {
        return this._installExperience;
    };
    /**
     * Sets the installExperience property value. The install experience for this app.
     * @param value Value to set for the installExperience property.
     */
    public set installExperience(value: Win32LobAppInstallExperience | undefined) {
        if(value) {
            this._installExperience = value instanceof Win32LobAppInstallExperienceImpl? value : new Win32LobAppInstallExperienceImpl(value);
        }
    };
    /**
     * Gets the minimumCpuSpeedInMHz property value. The value for the minimum CPU speed which is required to install this app.
     * @returns a integer
     */
    public get minimumCpuSpeedInMHz() {
        return this._minimumCpuSpeedInMHz;
    };
    /**
     * Sets the minimumCpuSpeedInMHz property value. The value for the minimum CPU speed which is required to install this app.
     * @param value Value to set for the minimumCpuSpeedInMHz property.
     */
    public set minimumCpuSpeedInMHz(value: number | undefined) {
        if(value) {
            this._minimumCpuSpeedInMHz = value;
        }
    };
    /**
     * Gets the minimumFreeDiskSpaceInMB property value. The value for the minimum free disk space which is required to install this app.
     * @returns a integer
     */
    public get minimumFreeDiskSpaceInMB() {
        return this._minimumFreeDiskSpaceInMB;
    };
    /**
     * Sets the minimumFreeDiskSpaceInMB property value. The value for the minimum free disk space which is required to install this app.
     * @param value Value to set for the minimumFreeDiskSpaceInMB property.
     */
    public set minimumFreeDiskSpaceInMB(value: number | undefined) {
        if(value) {
            this._minimumFreeDiskSpaceInMB = value;
        }
    };
    /**
     * Gets the minimumMemoryInMB property value. The value for the minimum physical memory which is required to install this app.
     * @returns a integer
     */
    public get minimumMemoryInMB() {
        return this._minimumMemoryInMB;
    };
    /**
     * Sets the minimumMemoryInMB property value. The value for the minimum physical memory which is required to install this app.
     * @param value Value to set for the minimumMemoryInMB property.
     */
    public set minimumMemoryInMB(value: number | undefined) {
        if(value) {
            this._minimumMemoryInMB = value;
        }
    };
    /**
     * Gets the minimumNumberOfProcessors property value. The value for the minimum number of processors which is required to install this app.
     * @returns a integer
     */
    public get minimumNumberOfProcessors() {
        return this._minimumNumberOfProcessors;
    };
    /**
     * Sets the minimumNumberOfProcessors property value. The value for the minimum number of processors which is required to install this app.
     * @param value Value to set for the minimumNumberOfProcessors property.
     */
    public set minimumNumberOfProcessors(value: number | undefined) {
        if(value) {
            this._minimumNumberOfProcessors = value;
        }
    };
    /**
     * Gets the minimumSupportedWindowsRelease property value. The value for the minimum supported windows release.
     * @returns a string
     */
    public get minimumSupportedWindowsRelease() {
        return this._minimumSupportedWindowsRelease;
    };
    /**
     * Sets the minimumSupportedWindowsRelease property value. The value for the minimum supported windows release.
     * @param value Value to set for the minimumSupportedWindowsRelease property.
     */
    public set minimumSupportedWindowsRelease(value: string | undefined) {
        if(value) {
            this._minimumSupportedWindowsRelease = value;
        }
    };
    /**
     * Gets the msiInformation property value. The MSI details if this Win32 app is an MSI app.
     * @returns a Win32LobAppMsiInformationInterface
     */
    public get msiInformation() {
        return this._msiInformation;
    };
    /**
     * Sets the msiInformation property value. The MSI details if this Win32 app is an MSI app.
     * @param value Value to set for the msiInformation property.
     */
    public set msiInformation(value: Win32LobAppMsiInformation | undefined) {
        if(value) {
            this._msiInformation = value instanceof Win32LobAppMsiInformationImpl? value : new Win32LobAppMsiInformationImpl(value);
        }
    };
    /**
     * Gets the returnCodes property value. The return codes for post installation behavior.
     * @returns a Win32LobAppReturnCodeInterface
     */
    public get returnCodes() {
        return this._returnCodes;
    };
    /**
     * Sets the returnCodes property value. The return codes for post installation behavior.
     * @param value Value to set for the returnCodes property.
     */
    public set returnCodes(value: Win32LobAppReturnCode[] | undefined) {
        if(value) {
            const returnCodesArrValue: Win32LobAppReturnCodeImpl[] = [];
            this.returnCodes?.forEach(element => {
                returnCodesArrValue.push((element instanceof Win32LobAppReturnCodeImpl? element:new Win32LobAppReturnCodeImpl(element)));
            });
            this._returnCodes = returnCodesArrValue;
        }
    };
    /**
     * Gets the rules property value. The detection and requirement rules for this app.
     * @returns a Win32LobAppRuleInterface
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. The detection and requirement rules for this app.
     * @param value Value to set for the rules property.
     */
    public set rules(value: Win32LobAppRule[] | undefined) {
        if(value) {
            const rulesArrValue: Win32LobAppRuleImpl[] = [];
            this.rules?.forEach(element => {
                rulesArrValue.push((element instanceof Win32LobAppRuleImpl? element:new Win32LobAppRuleImpl(element)));
            });
            this._rules = rulesArrValue;
        }
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
            writer.writeObjectValue<Win32LobAppInstallExperienceImpl>("installExperience", (!this.installExperience || this.installExperience instanceof Win32LobAppInstallExperienceImpl? this.installExperience : new Win32LobAppInstallExperienceImpl(this.installExperience)));
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
            writer.writeObjectValue<Win32LobAppMsiInformationImpl>("msiInformation", (!this.msiInformation || this.msiInformation instanceof Win32LobAppMsiInformationImpl? this.msiInformation : new Win32LobAppMsiInformationImpl(this.msiInformation)));
        }
        if(this.returnCodes && this.returnCodes.length != 0){        const returnCodesArrValue: Win32LobAppReturnCodeImpl[] = [];
        this.returnCodes?.forEach(element => {
            returnCodesArrValue.push((element instanceof Win32LobAppReturnCodeImpl? element:new Win32LobAppReturnCodeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<Win32LobAppReturnCodeImpl>("returnCodes", returnCodesArrValue);
        }
        if(this.rules && this.rules.length != 0){        const rulesArrValue: Win32LobAppRuleImpl[] = [];
        this.rules?.forEach(element => {
            rulesArrValue.push((element instanceof Win32LobAppRuleImpl? element:new Win32LobAppRuleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<Win32LobAppRuleImpl>("rules", rulesArrValue);
        }
        if(this.setupFilePath){
            writer.writeStringValue("setupFilePath", this.setupFilePath);
        }
        if(this.uninstallCommandLine){
            writer.writeStringValue("uninstallCommandLine", this.uninstallCommandLine);
        }
    };
    /**
     * Gets the setupFilePath property value. The relative path of the setup file in the encrypted Win32LobApp package.
     * @returns a string
     */
    public get setupFilePath() {
        return this._setupFilePath;
    };
    /**
     * Sets the setupFilePath property value. The relative path of the setup file in the encrypted Win32LobApp package.
     * @param value Value to set for the setupFilePath property.
     */
    public set setupFilePath(value: string | undefined) {
        if(value) {
            this._setupFilePath = value;
        }
    };
    /**
     * Gets the uninstallCommandLine property value. The command line to uninstall this app
     * @returns a string
     */
    public get uninstallCommandLine() {
        return this._uninstallCommandLine;
    };
    /**
     * Sets the uninstallCommandLine property value. The command line to uninstall this app
     * @param value Value to set for the uninstallCommandLine property.
     */
    public set uninstallCommandLine(value: string | undefined) {
        if(value) {
            this._uninstallCommandLine = value;
        }
    };
}
