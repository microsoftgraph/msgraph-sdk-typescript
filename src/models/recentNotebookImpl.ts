import {createRecentNotebookLinksFromDiscriminatorValue} from './createRecentNotebookLinksFromDiscriminatorValue';
import {RecentNotebookLinksImpl} from './index';
import {OnenoteSourceService} from './onenoteSourceService';
import {RecentNotebook} from './recentNotebook';
import {RecentNotebookLinks} from './recentNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecentNotebookImpl implements AdditionalDataHolder, Parsable, RecentNotebook {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the notebook. */
    public displayName?: string | undefined;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public lastAccessedTime?: Date | undefined;
    /** Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web. */
    public links?: RecentNotebookLinks | undefined;
    /** The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive. */
    public sourceService?: OnenoteSourceService | undefined;
    /**
     * Instantiates a new recentNotebook and sets the default values.
     * @param recentNotebookParameterValue 
     */
    public constructor(recentNotebookParameterValue?: RecentNotebook | undefined) {
        this.additionalData = recentNotebookParameterValue?.additionalData ? recentNotebookParameterValue?.additionalData! : {}
        this.displayName = recentNotebookParameterValue?.displayName ;
        this.lastAccessedTime = recentNotebookParameterValue?.lastAccessedTime ;
        this.links = recentNotebookParameterValue?.links ;
        this.sourceService = recentNotebookParameterValue?.sourceService ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastAccessedTime": n => { this.lastAccessedTime = n.getDateValue(); },
            "links": n => { this.links = n.getObjectValue<RecentNotebookLinksImpl>(createRecentNotebookLinksFromDiscriminatorValue); },
            "sourceService": n => { this.sourceService = n.getEnumValue<OnenoteSourceService>(OnenoteSourceService); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastAccessedTime){
        writer.writeDateValue("lastAccessedTime", this.lastAccessedTime);
        }
        if(this.links){
        writer.writeObjectValue<RecentNotebookLinksImpl>("links", new RecentNotebookLinksImpl(this.links));
        }
        if(this.sourceService){
        writer.writeEnumValue<OnenoteSourceService>("sourceService", this.sourceService);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
