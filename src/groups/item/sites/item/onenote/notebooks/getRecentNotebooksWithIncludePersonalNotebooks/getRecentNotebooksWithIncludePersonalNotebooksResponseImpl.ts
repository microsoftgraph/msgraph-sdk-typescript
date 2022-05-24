import {RecentNotebookImpl} from '../../../../../../../models/';
import {createRecentNotebookFromDiscriminatorValue} from '../../../../../../../models/createRecentNotebookFromDiscriminatorValue';
import {RecentNotebook} from '../../../../../../../models/recentNotebook';
import {GetRecentNotebooksWithIncludePersonalNotebooksResponse} from './getRecentNotebooksWithIncludePersonalNotebooksResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getRecentNotebooks method. */
export class GetRecentNotebooksWithIncludePersonalNotebooksResponseImpl implements AdditionalDataHolder, GetRecentNotebooksWithIncludePersonalNotebooksResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: RecentNotebook[] | undefined;
    /**
     * Instantiates a new getRecentNotebooksWithIncludePersonalNotebooksResponse and sets the default values.
     * @param getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue 
     */
    public constructor(getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?: GetRecentNotebooksWithIncludePersonalNotebooksResponse | undefined) {
        this.additionalData = getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.additionalData ? getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.additionalData! : {}
        this.value = getRecentNotebooksWithIncludePersonalNotebooksResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<RecentNotebookImpl>(createRecentNotebookFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: RecentNotebookImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RecentNotebookImpl(element));});
        writer.writeCollectionOfObjectValues<RecentNotebookImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
