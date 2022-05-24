import {createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue} from './createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue';
import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {EntityImpl, ImportedWindowsAutopilotDeviceIdentityStateImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Imported windows autopilot devices. */
export class ImportedWindowsAutopilotDeviceIdentityImpl extends EntityImpl implements ImportedWindowsAutopilotDeviceIdentity, Parsable {
    /** UPN of the user the device will be assigned */
    public assignedUserPrincipalName?: string | undefined;
    /** Group Tag of the Windows autopilot device. */
    public groupTag?: string | undefined;
    /** Hardware Blob of the Windows autopilot device. */
    public hardwareIdentifier?: string | undefined;
    /** The Import Id of the Windows autopilot device. */
    public importId?: string | undefined;
    /** Product Key of the Windows autopilot device. */
    public productKey?: string | undefined;
    /** Serial number of the Windows autopilot device. */
    public serialNumber?: string | undefined;
    /** Current state of the imported device. */
    public state?: ImportedWindowsAutopilotDeviceIdentityState | undefined;
    /**
     * Instantiates a new importedWindowsAutopilotDeviceIdentity and sets the default values.
     * @param importedWindowsAutopilotDeviceIdentityParameterValue 
     */
    public constructor(importedWindowsAutopilotDeviceIdentityParameterValue?: ImportedWindowsAutopilotDeviceIdentity | undefined) {
        super();
        this.assignedUserPrincipalName = importedWindowsAutopilotDeviceIdentityParameterValue?.assignedUserPrincipalName ;
        this.groupTag = importedWindowsAutopilotDeviceIdentityParameterValue?.groupTag ;
        this.hardwareIdentifier = importedWindowsAutopilotDeviceIdentityParameterValue?.hardwareIdentifier ;
        this.importId = importedWindowsAutopilotDeviceIdentityParameterValue?.importId ;
        this.productKey = importedWindowsAutopilotDeviceIdentityParameterValue?.productKey ;
        this.serialNumber = importedWindowsAutopilotDeviceIdentityParameterValue?.serialNumber ;
        this.state = importedWindowsAutopilotDeviceIdentityParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignedUserPrincipalName": n => { this.assignedUserPrincipalName = n.getStringValue(); },
            "groupTag": n => { this.groupTag = n.getStringValue(); },
            "hardwareIdentifier": n => { this.hardwareIdentifier = n.getStringValue(); },
            "importId": n => { this.importId = n.getStringValue(); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "state": n => { this.state = n.getObjectValue<ImportedWindowsAutopilotDeviceIdentityStateImpl>(createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignedUserPrincipalName){
        writer.writeStringValue("assignedUserPrincipalName", this.assignedUserPrincipalName);
        }
        if(this.groupTag){
        writer.writeStringValue("groupTag", this.groupTag);
        }
        if(this.hardwareIdentifier){
        writer.writeStringValue("hardwareIdentifier", this.hardwareIdentifier);
        }
        if(this.importId){
        writer.writeStringValue("importId", this.importId);
        }
        if(this.productKey){
        writer.writeStringValue("productKey", this.productKey);
        }
        if(this.serialNumber){
        writer.writeStringValue("serialNumber", this.serialNumber);
        }
        if(this.state){
        writer.writeObjectValue<ImportedWindowsAutopilotDeviceIdentityStateImpl>("state", new ImportedWindowsAutopilotDeviceIdentityStateImpl(this.state));
        }
    };
}
