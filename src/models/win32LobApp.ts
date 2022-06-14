import {createWin32LobAppInstallExperienceFromDiscriminatorValue} from './createWin32LobAppInstallExperienceFromDiscriminatorValue';
import {createWin32LobAppMsiInformationFromDiscriminatorValue} from './createWin32LobAppMsiInformationFromDiscriminatorValue';
import {createWin32LobAppReturnCodeFromDiscriminatorValue} from './createWin32LobAppReturnCodeFromDiscriminatorValue';
import {createWin32LobAppRuleFromDiscriminatorValue} from './createWin32LobAppRuleFromDiscriminatorValue';
import {MobileLobApp, Win32LobAppInstallExperience, Win32LobAppMsiInformation, Win32LobAppReturnCode, Win32LobAppRule} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobApp extends MobileLobApp implements Parsable {
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
        this._applicableArchitectures = value;
    };
    /**
     * Instantiates a new Win32LobApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableArchitectures": n => { this.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
            "installCommandLine": n => { this.installCommandLine = n.getStringValue(); },
            "installExperience": n => { this.installExperience = n.getObjectValue<Win32LobAppInstallExperience>(createWin32LobAppInstallExperienceFromDiscriminatorValue); },
            "minimumCpuSpeedInMHz": n => { this.minimumCpuSpeedInMHz = n.getNumberValue(); },
            "minimumFreeDiskSpaceInMB": n => { this.minimumFreeDiskSpaceInMB = n.getNumberValue(); },
            "minimumMemoryInMB": n => { this.minimumMemoryInMB = n.getNumberValue(); },
            "minimumNumberOfProcessors": n => { this.minimumNumberOfProcessors = n.getNumberValue(); },
            "minimumSupportedWindowsRelease": n => { this.minimumSupportedWindowsRelease = n.getStringValue(); },
            "msiInformation": n => { this.msiInformation = n.getObjectValue<Win32LobAppMsiInformation>(createWin32LobAppMsiInformationFromDiscriminatorValue); },
            "returnCodes": n => { this.returnCodes = n.getCollectionOfObjectValues<Win32LobAppReturnCode>(createWin32LobAppReturnCodeFromDiscriminatorValue); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<Win32LobAppRule>(createWin32LobAppRuleFromDiscriminatorValue); },
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
        this._installCommandLine = value;
    };
    /**
     * Gets the installExperience property value. The install experience for this app.
     * @returns a win32LobAppInstallExperience
     */
    public get installExperience() {
        return this._installExperience;
    };
    /**
     * Sets the installExperience property value. The install experience for this app.
     * @param value Value to set for the installExperience property.
     */
    public set installExperience(value: Win32LobAppInstallExperience | undefined) {
        this._installExperience = value;
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
        this._minimumCpuSpeedInMHz = value;
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
        this._minimumFreeDiskSpaceInMB = value;
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
        this._minimumMemoryInMB = value;
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
        this._minimumNumberOfProcessors = value;
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
        this._minimumSupportedWindowsRelease = value;
    };
    /**
     * Gets the msiInformation property value. The MSI details if this Win32 app is an MSI app.
     * @returns a win32LobAppMsiInformation
     */
    public get msiInformation() {
        return this._msiInformation;
    };
    /**
     * Sets the msiInformation property value. The MSI details if this Win32 app is an MSI app.
     * @param value Value to set for the msiInformation property.
     */
    public set msiInformation(value: Win32LobAppMsiInformation | undefined) {
        this._msiInformation = value;
    };
    /**
     * Gets the returnCodes property value. The return codes for post installation behavior.
     * @returns a win32LobAppReturnCode
     */
    public get returnCodes() {
        return this._returnCodes;
    };
    /**
     * Sets the returnCodes property value. The return codes for post installation behavior.
     * @param value Value to set for the returnCodes property.
     */
    public set returnCodes(value: Win32LobAppReturnCode[] | undefined) {
        this._returnCodes = value;
    };
    /**
     * Gets the rules property value. The detection and requirement rules for this app.
     * @returns a win32LobAppRule
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. The detection and requirement rules for this app.
     * @param value Value to set for the rules property.
     */
    public set rules(value: Win32LobAppRule[] | undefined) {
        this._rules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", this.applicableArchitectures);
        writer.writeStringValue("installCommandLine", this.installCommandLine);
        writer.writeObjectValue<Win32LobAppInstallExperience>("installExperience", this.installExperience);
        writer.writeNumberValue("minimumCpuSpeedInMHz", this.minimumCpuSpeedInMHz);
        writer.writeNumberValue("minimumFreeDiskSpaceInMB", this.minimumFreeDiskSpaceInMB);
        writer.writeNumberValue("minimumMemoryInMB", this.minimumMemoryInMB);
        writer.writeNumberValue("minimumNumberOfProcessors", this.minimumNumberOfProcessors);
        writer.writeStringValue("minimumSupportedWindowsRelease", this.minimumSupportedWindowsRelease);
        writer.writeObjectValue<Win32LobAppMsiInformation>("msiInformation", this.msiInformation);
        writer.writeCollectionOfObjectValues<Win32LobAppReturnCode>("returnCodes", this.returnCodes);
        writer.writeCollectionOfObjectValues<Win32LobAppRule>("rules", this.rules);
        writer.writeStringValue("setupFilePath", this.setupFilePath);
        writer.writeStringValue("uninstallCommandLine", this.uninstallCommandLine);
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
        this._setupFilePath = value;
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
        this._uninstallCommandLine = value;
    };
}
