import {ItemReferenceImpl} from '../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../models/itemReference';
import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copy method. */
export class CopyPostRequestBodyImpl implements AdditionalDataHolder, CopyPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name property */
    public name?: string | undefined;
    /** The parentReference property */
    public parentReference?: ItemReference | undefined;
    /**
     * Instantiates a new copyPostRequestBody and sets the default values.
     * @param copyPostRequestBodyParameterValue 
     */
    public constructor(copyPostRequestBodyParameterValue?: CopyPostRequestBody | undefined) {
        this.additionalData = copyPostRequestBodyParameterValue?.additionalData ? copyPostRequestBodyParameterValue?.additionalData! : {}
        this.name = copyPostRequestBodyParameterValue?.name ;
        this.parentReference = copyPostRequestBodyParameterValue?.parentReference ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.parentReference){
        writer.writeObjectValue<ItemReferenceImpl>("parentReference", new ItemReferenceImpl(this.parentReference));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
