import {EntityImpl} from './index';
import {ManagedAppStatus} from './managedAppStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents app protection and configuration status for the organization. */
export class ManagedAppStatusImpl extends EntityImpl implements ManagedAppStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Friendly name of the status report. */
    public displayName?: string | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedAppStatus and sets the default values.
     * @param managedAppStatusParameterValue 
     */
    public constructor(managedAppStatusParameterValue?: ManagedAppStatus | undefined) {
        super(managedAppStatusParameterValue);
        this.additionalData = managedAppStatusParameterValue?.additionalData ? managedAppStatusParameterValue?.additionalData! : {};
        this.displayName = managedAppStatusParameterValue?.displayName;
        this.version = managedAppStatusParameterValue?.version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
