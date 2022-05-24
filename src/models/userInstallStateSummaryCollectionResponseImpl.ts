import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {UserInstallStateSummaryImpl} from './index';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {UserInstallStateSummaryCollectionResponse} from './userInstallStateSummaryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserInstallStateSummaryCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserInstallStateSummaryCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserInstallStateSummary[] | undefined;
    /**
     * Instantiates a new UserInstallStateSummaryCollectionResponse and sets the default values.
     * @param userInstallStateSummaryCollectionResponseParameterValue 
     */
    public constructor(userInstallStateSummaryCollectionResponseParameterValue?: UserInstallStateSummaryCollectionResponse | undefined) {
        this.additionalData = userInstallStateSummaryCollectionResponseParameterValue?.additionalData ? userInstallStateSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userInstallStateSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = userInstallStateSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserInstallStateSummaryImpl>(createUserInstallStateSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserInstallStateSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserInstallStateSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<UserInstallStateSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
