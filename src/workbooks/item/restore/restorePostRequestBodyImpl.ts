import {ItemReferenceImpl} from '../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../models/itemReference';
import {RestorePostRequestBody} from './restorePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the restore method. */
export class RestorePostRequestBodyImpl implements AdditionalDataHolder, Parsable, RestorePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name property */
    public name?: string | undefined;
    /** The parentReference property */
    public parentReference?: ItemReference | undefined;
    /**
     * Instantiates a new restorePostRequestBody and sets the default values.
     * @param restorePostRequestBodyParameterValue 
     */
    public constructor(restorePostRequestBodyParameterValue?: RestorePostRequestBody | undefined) {
        this.additionalData = restorePostRequestBodyParameterValue?.additionalData ? restorePostRequestBodyParameterValue?.additionalData! : {}
        this.name = restorePostRequestBodyParameterValue?.name ;
        this.parentReference = restorePostRequestBodyParameterValue?.parentReference ;
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
