import {EntityImpl} from './index';
import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class OnenoteEntityBaseModelImpl extends EntityImpl implements OnenoteEntityBaseModel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The endpoint where you can get details about the page. Read-only. */
    public self?: string | undefined;
    /**
     * Instantiates a new onenoteEntityBaseModel and sets the default values.
     * @param onenoteEntityBaseModelParameterValue 
     */
    public constructor(onenoteEntityBaseModelParameterValue?: OnenoteEntityBaseModel | undefined) {
        super(onenoteEntityBaseModelParameterValue);
        this.additionalData = onenoteEntityBaseModelParameterValue?.additionalData ? onenoteEntityBaseModelParameterValue?.additionalData! : {};
        this.self = onenoteEntityBaseModelParameterValue?.self;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
