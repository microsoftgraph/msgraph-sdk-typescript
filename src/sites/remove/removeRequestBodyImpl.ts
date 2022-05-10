import {SiteImpl} from '../../models/';
import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {Site} from '../../models/site';
import {RemoveRequestBody} from './removeRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the remove method.  */
export class RemoveRequestBodyImpl implements AdditionalDataHolder, Parsable, RemoveRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The value property  */
    value?: Site[] | undefined;
    /**
     * Instantiates a new removeRequestBody and sets the default values.
     * @param removeRequestBodyParameterValue 
     */
    public constructor(removeRequestBodyParameterValue?: RemoveRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = removeRequestBodyParameterValue?.additionalData ? {} : removeRequestBodyParameterValue?.additionalData!
        this.value = removeRequestBodyParameterValue?.value ;
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
        if(this.value){
        const valueArrValue: SiteImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SiteImpl(element));});
        writer.writeCollectionOfObjectValues<SiteImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
