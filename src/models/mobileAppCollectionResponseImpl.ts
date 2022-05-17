import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {MobileAppImpl} from './index';
import {MobileApp} from './mobileApp';
import {MobileAppCollectionResponse} from './mobileAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppCollectionResponseImpl implements AdditionalDataHolder, MobileAppCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: MobileApp[] | undefined;
    /**
     * Instantiates a new MobileAppCollectionResponse and sets the default values.
     * @param mobileAppCollectionResponseParameterValue 
     */
    public constructor(mobileAppCollectionResponseParameterValue?: MobileAppCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = mobileAppCollectionResponseParameterValue?.additionalData ? {} : mobileAppCollectionResponseParameterValue?.additionalData!
        this.nextLink = mobileAppCollectionResponseParameterValue?.nextLink ;
        this.value = mobileAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileAppImpl>(createMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: MobileAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<MobileAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
