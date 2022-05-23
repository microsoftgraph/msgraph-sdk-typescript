import {EntityImpl} from './index';
import {ManagedAppPolicy} from './managedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The ManagedAppPolicy resource represents a base type for platform specific policies. */
export class ManagedAppPolicyImpl extends EntityImpl implements ManagedAppPolicy, Parsable {
    /** The date and time the policy was created. */
    public createdDateTime?: Date | undefined;
    /** The policy's description. */
    public description?: string | undefined;
    /** Policy display name. */
    public displayName?: string | undefined;
    /** Last time the policy was modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** Version of the entity. */
    public version?: string | undefined;
    /**
     * Instantiates a new managedAppPolicy and sets the default values.
     * @param managedAppPolicyParameterValue 
     */
    public constructor(managedAppPolicyParameterValue?: ManagedAppPolicy | undefined) {
        super();
        this.createdDateTime = managedAppPolicyParameterValue?.createdDateTime ;
        this.description = managedAppPolicyParameterValue?.description ;
        this.displayName = managedAppPolicyParameterValue?.displayName ;
        this.lastModifiedDateTime = managedAppPolicyParameterValue?.lastModifiedDateTime ;
        this.version = managedAppPolicyParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
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
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.version){
        writer.writeStringValue("version", this.version);
        }
    };
}
