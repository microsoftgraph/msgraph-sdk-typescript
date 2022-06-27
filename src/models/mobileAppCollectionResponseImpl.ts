import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {MobileAppImpl} from './index';
import {MobileApp} from './mobileApp';
import {MobileAppCollectionResponse} from './mobileAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MobileAppCollectionResponseImpl implements MobileAppCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MobileApp[] | undefined;
    /**
     * Instantiates a new MobileAppCollectionResponse and sets the default values.
     * @param mobileAppCollectionResponseParameterValue 
     */
    public constructor(mobileAppCollectionResponseParameterValue?: MobileAppCollectionResponse | undefined) {
        this.additionalData = mobileAppCollectionResponseParameterValue?.additionalData ? mobileAppCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = mobileAppCollectionResponseParameterValue?.nextLink;
        const valueArrValue: MobileAppImpl[] = []; mobileAppCollectionResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof MobileAppImpl? element : new MobileAppImpl(element));});
        this.value = valueArrValue;
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
            writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: MobileAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof MobileAppImpl? element : new MobileAppImpl(element));});
            writer.writeCollectionOfObjectValues<MobileAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
