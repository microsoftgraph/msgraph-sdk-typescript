import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {TeamsTabImpl} from './index';
import {TeamsTab} from './teamsTab';
import {TeamsTabCollectionResponse} from './teamsTabCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTabCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsTabCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: TeamsTab[] | undefined;
    /**
     * Instantiates a new TeamsTabCollectionResponse and sets the default values.
     * @param teamsTabCollectionResponseParameterValue 
     */
    public constructor(teamsTabCollectionResponseParameterValue?: TeamsTabCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = teamsTabCollectionResponseParameterValue?.additionalData ? {} : teamsTabCollectionResponseParameterValue?.additionalData!
        this.nextLink = teamsTabCollectionResponseParameterValue?.nextLink ;
        this.value = teamsTabCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsTabImpl>(createTeamsTabFromDiscriminatorValue); },
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
        const valueArrValue: TeamsTabImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsTabImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsTabImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
