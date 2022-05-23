import {SiteImpl} from '../../models/';
import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {Site} from '../../models/site';
import {RemovePostRequestBody} from './removePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the remove method. */
export class RemovePostRequestBodyImpl implements AdditionalDataHolder, Parsable, RemovePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: Site[] | undefined;
    /**
     * Instantiates a new removePostRequestBody and sets the default values.
     * @param removePostRequestBodyParameterValue 
     */
    public constructor(removePostRequestBodyParameterValue?: RemovePostRequestBody | undefined) {
        this.additionalData = removePostRequestBodyParameterValue?.additionalData ? removePostRequestBodyParameterValue?.additionalData! : {}
        this.value = removePostRequestBodyParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<SiteImpl>(createSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: SiteImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
