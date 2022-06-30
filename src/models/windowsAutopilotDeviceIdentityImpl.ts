import {EnrollmentState} from './enrollmentState';
import {EntityImpl} from './index';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The windowsAutopilotDeviceIdentity resource represents a Windows Autopilot Device. */
export class WindowsAutopilotDeviceIdentityImpl extends EntityImpl implements WindowsAutopilotDeviceIdentity {
    /** Addressable user name. */
    private _addressableUserName?: string | undefined;
    /** AAD Device ID - to be deprecated */
    private _azureActiveDirectoryDeviceId?: string | undefined;
    /** Display Name */
    private _displayName?: string | undefined;
    /** Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked. */
    private _enrollmentState?: EnrollmentState | undefined;
    /** Group Tag of the Windows autopilot device. */
    private _groupTag?: string | undefined;
    /** Intune Last Contacted Date Time of the Windows autopilot device. */
    private _lastContactedDateTime?: Date | undefined;
    /** Managed Device ID */
    private _managedDeviceId?: string | undefined;
    /** Oem manufacturer of the Windows autopilot device. */
    private _manufacturer?: string | undefined;
    /** Model name of the Windows autopilot device. */
    private _model?: string | undefined;
    /** Product Key of the Windows autopilot device. */
    private _productKey?: string | undefined;
    /** Purchase Order Identifier of the Windows autopilot device. */
    private _purchaseOrderIdentifier?: string | undefined;
    /** Resource Name. */
    private _resourceName?: string | undefined;
    /** Serial number of the Windows autopilot device. */
    private _serialNumber?: string | undefined;
    /** SKU Number */
    private _skuNumber?: string | undefined;
    /** System Family */
    private _systemFamily?: string | undefined;
    /** User Principal Name. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the addressableUserName property value. Addressable user name.
     * @returns a string
     */
    public get addressableUserName() {
        return this._addressableUserName;
    };
    /**
     * Sets the addressableUserName property value. Addressable user name.
     * @param value Value to set for the addressableUserName property.
     */
    public set addressableUserName(value: string | undefined) {
        if(value) {
            this._addressableUserName = value;
        }
    };
    /**
     * Gets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
     * @returns a string
     */
    public get azureActiveDirectoryDeviceId() {
        return this._azureActiveDirectoryDeviceId;
    };
    /**
     * Sets the azureActiveDirectoryDeviceId property value. AAD Device ID - to be deprecated
     * @param value Value to set for the azureActiveDirectoryDeviceId property.
     */
    public set azureActiveDirectoryDeviceId(value: string | undefined) {
        if(value) {
            this._azureActiveDirectoryDeviceId = value;
        }
    };
    /**
     * Instantiates a new windowsAutopilotDeviceIdentity and sets the default values.
     * @param windowsAutopilotDeviceIdentityParameterValue 
     */
    public constructor(windowsAutopilotDeviceIdentityParameterValue?: WindowsAutopilotDeviceIdentity | undefined) {
        super(windowsAutopilotDeviceIdentityParameterValue);
        this._addressableUserName = windowsAutopilotDeviceIdentityParameterValue?.addressableUserName;
        this._azureActiveDirectoryDeviceId = windowsAutopilotDeviceIdentityParameterValue?.azureActiveDirectoryDeviceId;
        this._displayName = windowsAutopilotDeviceIdentityParameterValue?.displayName;
        this._enrollmentState = windowsAutopilotDeviceIdentityParameterValue?.enrollmentState;
        this._groupTag = windowsAutopilotDeviceIdentityParameterValue?.groupTag;
        this._lastContactedDateTime = windowsAutopilotDeviceIdentityParameterValue?.lastContactedDateTime;
        this._managedDeviceId = windowsAutopilotDeviceIdentityParameterValue?.managedDeviceId;
        this._manufacturer = windowsAutopilotDeviceIdentityParameterValue?.manufacturer;
        this._model = windowsAutopilotDeviceIdentityParameterValue?.model;
        this._productKey = windowsAutopilotDeviceIdentityParameterValue?.productKey;
        this._purchaseOrderIdentifier = windowsAutopilotDeviceIdentityParameterValue?.purchaseOrderIdentifier;
        this._resourceName = windowsAutopilotDeviceIdentityParameterValue?.resourceName;
        this._serialNumber = windowsAutopilotDeviceIdentityParameterValue?.serialNumber;
        this._skuNumber = windowsAutopilotDeviceIdentityParameterValue?.skuNumber;
        this._systemFamily = windowsAutopilotDeviceIdentityParameterValue?.systemFamily;
        this._userPrincipalName = windowsAutopilotDeviceIdentityParameterValue?.userPrincipalName;
    };
    /**
     * Gets the displayName property value. Display Name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display Name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked.
     * @returns a enrollmentState
     */
    public get enrollmentState() {
        return this._enrollmentState;
    };
    /**
     * Sets the enrollmentState property value. Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed, notContacted, blocked.
     * @param value Value to set for the enrollmentState property.
     */
    public set enrollmentState(value: EnrollmentState | undefined) {
        if(value) {
            this._enrollmentState = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addressableUserName": n => { this.addressableUserName = n.getStringValue(); },
            "azureActiveDirectoryDeviceId": n => { this.azureActiveDirectoryDeviceId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enrollmentState": n => { this.enrollmentState = n.getEnumValue<EnrollmentState>(EnrollmentState); },
            "groupTag": n => { this.groupTag = n.getStringValue(); },
            "lastContactedDateTime": n => { this.lastContactedDateTime = n.getDateValue(); },
            "managedDeviceId": n => { this.managedDeviceId = n.getStringValue(); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "purchaseOrderIdentifier": n => { this.purchaseOrderIdentifier = n.getStringValue(); },
            "resourceName": n => { this.resourceName = n.getStringValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "skuNumber": n => { this.skuNumber = n.getStringValue(); },
            "systemFamily": n => { this.systemFamily = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the groupTag property value. Group Tag of the Windows autopilot device.
     * @returns a string
     */
    public get groupTag() {
        return this._groupTag;
    };
    /**
     * Sets the groupTag property value. Group Tag of the Windows autopilot device.
     * @param value Value to set for the groupTag property.
     */
    public set groupTag(value: string | undefined) {
        if(value) {
            this._groupTag = value;
        }
    };
    /**
     * Gets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
     * @returns a Date
     */
    public get lastContactedDateTime() {
        return this._lastContactedDateTime;
    };
    /**
     * Sets the lastContactedDateTime property value. Intune Last Contacted Date Time of the Windows autopilot device.
     * @param value Value to set for the lastContactedDateTime property.
     */
    public set lastContactedDateTime(value: Date | undefined) {
        if(value) {
            this._lastContactedDateTime = value;
        }
    };
    /**
     * Gets the managedDeviceId property value. Managed Device ID
     * @returns a string
     */
    public get managedDeviceId() {
        return this._managedDeviceId;
    };
    /**
     * Sets the managedDeviceId property value. Managed Device ID
     * @param value Value to set for the managedDeviceId property.
     */
    public set managedDeviceId(value: string | undefined) {
        if(value) {
            this._managedDeviceId = value;
        }
    };
    /**
     * Gets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Oem manufacturer of the Windows autopilot device.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        if(value) {
            this._manufacturer = value;
        }
    };
    /**
     * Gets the model property value. Model name of the Windows autopilot device.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model name of the Windows autopilot device.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        if(value) {
            this._model = value;
        }
    };
    /**
     * Gets the productKey property value. Product Key of the Windows autopilot device.
     * @returns a string
     */
    public get productKey() {
        return this._productKey;
    };
    /**
     * Sets the productKey property value. Product Key of the Windows autopilot device.
     * @param value Value to set for the productKey property.
     */
    public set productKey(value: string | undefined) {
        if(value) {
            this._productKey = value;
        }
    };
    /**
     * Gets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
     * @returns a string
     */
    public get purchaseOrderIdentifier() {
        return this._purchaseOrderIdentifier;
    };
    /**
     * Sets the purchaseOrderIdentifier property value. Purchase Order Identifier of the Windows autopilot device.
     * @param value Value to set for the purchaseOrderIdentifier property.
     */
    public set purchaseOrderIdentifier(value: string | undefined) {
        if(value) {
            this._purchaseOrderIdentifier = value;
        }
    };
    /**
     * Gets the resourceName property value. Resource Name.
     * @returns a string
     */
    public get resourceName() {
        return this._resourceName;
    };
    /**
     * Sets the resourceName property value. Resource Name.
     * @param value Value to set for the resourceName property.
     */
    public set resourceName(value: string | undefined) {
        if(value) {
            this._resourceName = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addressableUserName){
            writer.writeStringValue("addressableUserName", this.addressableUserName);
        }
        if(this.azureActiveDirectoryDeviceId){
            writer.writeStringValue("azureActiveDirectoryDeviceId", this.azureActiveDirectoryDeviceId);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enrollmentState){
            writer.writeEnumValue<EnrollmentState>("enrollmentState", this.enrollmentState);
        }
        if(this.groupTag){
            writer.writeStringValue("groupTag", this.groupTag);
        }
        if(this.lastContactedDateTime){
            writer.writeDateValue("lastContactedDateTime", this.lastContactedDateTime);
        }
        if(this.managedDeviceId){
            writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        }
        if(this.manufacturer){
            writer.writeStringValue("manufacturer", this.manufacturer);
        }
        if(this.model){
            writer.writeStringValue("model", this.model);
        }
        if(this.productKey){
            writer.writeStringValue("productKey", this.productKey);
        }
        if(this.purchaseOrderIdentifier){
            writer.writeStringValue("purchaseOrderIdentifier", this.purchaseOrderIdentifier);
        }
        if(this.resourceName){
            writer.writeStringValue("resourceName", this.resourceName);
        }
        if(this.serialNumber){
            writer.writeStringValue("serialNumber", this.serialNumber);
        }
        if(this.skuNumber){
            writer.writeStringValue("skuNumber", this.skuNumber);
        }
        if(this.systemFamily){
            writer.writeStringValue("systemFamily", this.systemFamily);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
    /**
     * Gets the serialNumber property value. Serial number of the Windows autopilot device.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. Serial number of the Windows autopilot device.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        if(value) {
            this._serialNumber = value;
        }
    };
    /**
     * Gets the skuNumber property value. SKU Number
     * @returns a string
     */
    public get skuNumber() {
        return this._skuNumber;
    };
    /**
     * Sets the skuNumber property value. SKU Number
     * @param value Value to set for the skuNumber property.
     */
    public set skuNumber(value: string | undefined) {
        if(value) {
            this._skuNumber = value;
        }
    };
    /**
     * Gets the systemFamily property value. System Family
     * @returns a string
     */
    public get systemFamily() {
        return this._systemFamily;
    };
    /**
     * Sets the systemFamily property value. System Family
     * @param value Value to set for the systemFamily property.
     */
    public set systemFamily(value: string | undefined) {
        if(value) {
            this._systemFamily = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. User Principal Name.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User Principal Name.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
