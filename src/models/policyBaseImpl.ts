import {DirectoryObjectImpl} from './index';
import {PolicyBase} from './policyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class PolicyBaseImpl extends DirectoryObjectImpl implements Parsable, PolicyBase {
    /** Description for this policy. Required. */
    public description?: string | undefined;
    /** Display name for this policy. Required. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new policyBase and sets the default values.
     * @param policyBaseParameterValue 
     */
    public constructor(policyBaseParameterValue?: PolicyBase | undefined) {
        super();
        this.description = policyBaseParameterValue?.description ;
        this.displayName = policyBaseParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
    };
}
