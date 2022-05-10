import {ItemReferenceImpl} from '../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../models/itemReference';
import {RestoreRequestBody} from './restoreRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the restore method.  */
export class RestoreRequestBodyImpl implements AdditionalDataHolder, Parsable, RestoreRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The name property  */
    name?: string | undefined;
    /** The parentReference property  */
    parentReference?: ItemReference | undefined;
    /**
     * Instantiates a new restoreRequestBody and sets the default values.
     * @param restoreRequestBodyParameterValue 
     */
    public constructor(restoreRequestBodyParameterValue?: RestoreRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = restoreRequestBodyParameterValue?.additionalData ? {} : restoreRequestBodyParameterValue?.additionalData!
        this.name = restoreRequestBodyParameterValue?.name ;
        this.parentReference = restoreRequestBodyParameterValue?.parentReference ;
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
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.parentReference){
        if(this.parentReference)
        writer.writeObjectValue<ItemReferenceImpl>("parentReference", new ItemReferenceImpl(this.parentReference));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
