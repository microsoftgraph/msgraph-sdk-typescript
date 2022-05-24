import {createIosUpdateDeviceStatusFromDiscriminatorValue} from './createIosUpdateDeviceStatusFromDiscriminatorValue';
import {IosUpdateDeviceStatusImpl} from './index';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdateDeviceStatusCollectionResponse} from './iosUpdateDeviceStatusCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosUpdateDeviceStatusCollectionResponseImpl implements AdditionalDataHolder, IosUpdateDeviceStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IosUpdateDeviceStatus[] | undefined;
    /**
     * Instantiates a new IosUpdateDeviceStatusCollectionResponse and sets the default values.
     * @param iosUpdateDeviceStatusCollectionResponseParameterValue 
     */
    public constructor(iosUpdateDeviceStatusCollectionResponseParameterValue?: IosUpdateDeviceStatusCollectionResponse | undefined) {
        this.additionalData = iosUpdateDeviceStatusCollectionResponseParameterValue?.additionalData ? iosUpdateDeviceStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = iosUpdateDeviceStatusCollectionResponseParameterValue?.nextLink ;
        this.value = iosUpdateDeviceStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IosUpdateDeviceStatusImpl>(createIosUpdateDeviceStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IosUpdateDeviceStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IosUpdateDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<IosUpdateDeviceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
