import {Win32LobAppMsiInformation} from './win32LobAppMsiInformation';
import {Win32LobAppMsiPackageType} from './win32LobAppMsiPackageType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains MSI app properties for a Win32 App. */
export class Win32LobAppMsiInformationImpl implements Win32LobAppMsiInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The MSI package type. Possible values are: perMachine, perUser, dualPurpose. */
    public packageType?: Win32LobAppMsiPackageType | undefined;
    /** The MSI product code. */
    public productCode?: string | undefined;
    /** The MSI product name. */
    public productName?: string | undefined;
    /** The MSI product version. */
    public productVersion?: string | undefined;
    /** The MSI publisher. */
    public publisher?: string | undefined;
    /** Whether the MSI app requires the machine to reboot to complete installation. */
    public requiresReboot?: boolean | undefined;
    /** The MSI upgrade code. */
    public upgradeCode?: string | undefined;
    /**
     * Instantiates a new win32LobAppMsiInformation and sets the default values.
     * @param win32LobAppMsiInformationParameterValue 
     */
    public constructor(win32LobAppMsiInformationParameterValue?: Win32LobAppMsiInformation | undefined) {
        this.additionalData = win32LobAppMsiInformationParameterValue?.additionalData ? win32LobAppMsiInformationParameterValue?.additionalData! : {};
        this.packageType = win32LobAppMsiInformationParameterValue?.packageType;
        this.productCode = win32LobAppMsiInformationParameterValue?.productCode;
        this.productName = win32LobAppMsiInformationParameterValue?.productName;
        this.productVersion = win32LobAppMsiInformationParameterValue?.productVersion;
        this.publisher = win32LobAppMsiInformationParameterValue?.publisher;
        this.requiresReboot = win32LobAppMsiInformationParameterValue?.requiresReboot;
        this.upgradeCode = win32LobAppMsiInformationParameterValue?.upgradeCode;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "packageType": n => { this.packageType = n.getEnumValue<Win32LobAppMsiPackageType>(Win32LobAppMsiPackageType); },
            "productCode": n => { this.productCode = n.getStringValue(); },
            "productName": n => { this.productName = n.getStringValue(); },
            "productVersion": n => { this.productVersion = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "requiresReboot": n => { this.requiresReboot = n.getBooleanValue(); },
            "upgradeCode": n => { this.upgradeCode = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.packageType){
            writer.writeEnumValue<Win32LobAppMsiPackageType>("packageType", this.packageType);
        }
        if(this.productCode){
            writer.writeStringValue("productCode", this.productCode);
        }
        if(this.productName){
            writer.writeStringValue("productName", this.productName);
        }
        if(this.productVersion){
            writer.writeStringValue("productVersion", this.productVersion);
        }
        if(this.publisher){
            writer.writeStringValue("publisher", this.publisher);
        }
        if(this.requiresReboot){
            writer.writeBooleanValue("requiresReboot", this.requiresReboot);
        }
        if(this.upgradeCode){
            writer.writeStringValue("upgradeCode", this.upgradeCode);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
