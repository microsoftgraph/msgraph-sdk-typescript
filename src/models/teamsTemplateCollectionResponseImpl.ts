import {createTeamsTemplateFromDiscriminatorValue} from './createTeamsTemplateFromDiscriminatorValue';
import {TeamsTemplateImpl} from './index';
import {TeamsTemplate} from './teamsTemplate';
import {TeamsTemplateCollectionResponse} from './teamsTemplateCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTemplateCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsTemplateCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TeamsTemplate[] | undefined;
    /**
     * Instantiates a new TeamsTemplateCollectionResponse and sets the default values.
     * @param teamsTemplateCollectionResponseParameterValue 
     */
    public constructor(teamsTemplateCollectionResponseParameterValue?: TeamsTemplateCollectionResponse | undefined) {
        this.additionalData = teamsTemplateCollectionResponseParameterValue?.additionalData ? teamsTemplateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamsTemplateCollectionResponseParameterValue?.nextLink ;
        this.value = teamsTemplateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsTemplateImpl>(createTeamsTemplateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamsTemplateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsTemplateImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
