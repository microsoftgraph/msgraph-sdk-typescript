import {createDefaultManagedAppProtectionFromDiscriminatorValue} from './createDefaultManagedAppProtectionFromDiscriminatorValue';
import {DefaultManagedAppProtection} from './defaultManagedAppProtection';
import {DefaultManagedAppProtectionCollectionResponse} from './defaultManagedAppProtectionCollectionResponse';
import {DefaultManagedAppProtectionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DefaultManagedAppProtectionCollectionResponseImpl implements AdditionalDataHolder, DefaultManagedAppProtectionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DefaultManagedAppProtection[] | undefined;
    /**
     * Instantiates a new DefaultManagedAppProtectionCollectionResponse and sets the default values.
     * @param defaultManagedAppProtectionCollectionResponseParameterValue 
     */
    public constructor(defaultManagedAppProtectionCollectionResponseParameterValue?: DefaultManagedAppProtectionCollectionResponse | undefined) {
        this.additionalData = defaultManagedAppProtectionCollectionResponseParameterValue?.additionalData ? defaultManagedAppProtectionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = defaultManagedAppProtectionCollectionResponseParameterValue?.nextLink ;
        this.value = defaultManagedAppProtectionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DefaultManagedAppProtectionImpl>(createDefaultManagedAppProtectionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DefaultManagedAppProtectionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DefaultManagedAppProtectionImpl(element));});
        writer.writeCollectionOfObjectValues<DefaultManagedAppProtectionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
