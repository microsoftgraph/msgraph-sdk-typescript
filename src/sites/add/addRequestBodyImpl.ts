import {SiteImpl} from '../../models/';
import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {Site} from '../../models/site';
import {AddRequestBody} from './addRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method.  */
export class AddRequestBodyImpl implements AdditionalDataHolder, AddRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The value property  */
    value?: Site[] | undefined;
    /**
     * Instantiates a new addRequestBody and sets the default values.
     * @param addRequestBodyParameterValue 
     */
    public constructor(addRequestBodyParameterValue?: AddRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = addRequestBodyParameterValue?.additionalData ? {} : addRequestBodyParameterValue?.additionalData!
        this.value = addRequestBodyParameterValue?.value ;
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
