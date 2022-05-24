import {EntityImpl} from './index';
import {ManagedAppOperation} from './managedAppOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents an operation applied against an app registration. */
export class ManagedAppOperationImpl extends EntityImpl implements ManagedAppOperation, Parsable {
    /** The operation name. */
    public displayName?: string | undefined;
    /** The last time the app operation was modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** The current state of the operation */
    public state?: string | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedAppOperation and sets the default values.
     * @param managedAppOperationParameterValue 
     */
    public constructor(managedAppOperationParameterValue?: ManagedAppOperation | undefined) {
        super();
        this.displayName = managedAppOperationParameterValue?.displayName ;
        this.lastModifiedDateTime = managedAppOperationParameterValue?.lastModifiedDateTime ;
        this.state = managedAppOperationParameterValue?.state ;
        this.version = managedAppOperationParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getStringValue(); },
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
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
