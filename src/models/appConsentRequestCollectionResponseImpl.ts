import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestCollectionResponse} from './appConsentRequestCollectionResponse';
import {createAppConsentRequestFromDiscriminatorValue} from './createAppConsentRequestFromDiscriminatorValue';
import {AppConsentRequestImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppConsentRequestCollectionResponseImpl implements AdditionalDataHolder, AppConsentRequestCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AppConsentRequest[] | undefined;
    /**
     * Instantiates a new AppConsentRequestCollectionResponse and sets the default values.
     * @param appConsentRequestCollectionResponseParameterValue 
     */
    public constructor(appConsentRequestCollectionResponseParameterValue?: AppConsentRequestCollectionResponse | undefined) {
        this.additionalData = appConsentRequestCollectionResponseParameterValue?.additionalData ? appConsentRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = appConsentRequestCollectionResponseParameterValue?.nextLink ;
        this.value = appConsentRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AppConsentRequestImpl>(createAppConsentRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AppConsentRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AppConsentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<AppConsentRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
