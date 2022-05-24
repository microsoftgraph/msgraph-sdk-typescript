import {EntityImpl} from './index';
import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteEntityBaseModelImpl extends EntityImpl implements OnenoteEntityBaseModel, Parsable {
    /** The endpoint where you can get details about the page. Read-only. */
    public self?: string | undefined;
    /**
     * Instantiates a new onenoteEntityBaseModel and sets the default values.
     * @param onenoteEntityBaseModelParameterValue 
     */
    public constructor(onenoteEntityBaseModelParameterValue?: OnenoteEntityBaseModel | undefined) {
        super();
        this.self = onenoteEntityBaseModelParameterValue?.self ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "self": n => { this.self = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.self){
        writer.writeStringValue("self", this.self);
        }
    };
}
