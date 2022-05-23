import {AndroidManagedAppProtection} from './androidManagedAppProtection';
import {AndroidManagedAppProtectionCollectionResponse} from './androidManagedAppProtectionCollectionResponse';
import {createAndroidManagedAppProtectionFromDiscriminatorValue} from './createAndroidManagedAppProtectionFromDiscriminatorValue';
import {AndroidManagedAppProtectionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidManagedAppProtectionCollectionResponseImpl implements AdditionalDataHolder, AndroidManagedAppProtectionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AndroidManagedAppProtection[] | undefined;
    /**
     * Instantiates a new AndroidManagedAppProtectionCollectionResponse and sets the default values.
     * @param androidManagedAppProtectionCollectionResponseParameterValue 
     */
    public constructor(androidManagedAppProtectionCollectionResponseParameterValue?: AndroidManagedAppProtectionCollectionResponse | undefined) {
        this.additionalData = androidManagedAppProtectionCollectionResponseParameterValue?.additionalData ? androidManagedAppProtectionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = androidManagedAppProtectionCollectionResponseParameterValue?.nextLink ;
        this.value = androidManagedAppProtectionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AndroidManagedAppProtectionImpl>(createAndroidManagedAppProtectionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AndroidManagedAppProtectionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AndroidManagedAppProtectionImpl(element));});
        writer.writeCollectionOfObjectValues<AndroidManagedAppProtectionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
