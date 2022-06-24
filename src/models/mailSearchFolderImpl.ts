import {MailFolderImpl} from './index';
import {MailSearchFolder} from './mailSearchFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailSearchFolderImpl extends MailFolderImpl implements MailSearchFolder {
    /** The OData query to filter the messages. */
    public filterQuery?: string | undefined;
    /** Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a shallow search of only each of the folders explicitly specified in sourceFolderIds. */
    public includeNestedFolders?: boolean | undefined;
    /** Indicates whether a search folder is editable using REST APIs. */
    public isSupported?: boolean | undefined;
    /** The mailbox folders that should be mined. */
    public sourceFolderIds?: string[] | undefined;
    /**
     * Instantiates a new MailSearchFolder and sets the default values.
     * @param mailSearchFolderParameterValue 
     */
    public constructor(mailSearchFolderParameterValue?: MailSearchFolder | undefined) {
        super(mailSearchFolderParameterValue);
        this.filterQuery = mailSearchFolderParameterValue?.filterQuery;
        this.includeNestedFolders = mailSearchFolderParameterValue?.includeNestedFolders;
        this.isSupported = mailSearchFolderParameterValue?.isSupported;
        this.sourceFolderIds = mailSearchFolderParameterValue?.sourceFolderIds;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "filterQuery": n => { this.filterQuery = n.getStringValue(); },
            "includeNestedFolders": n => { this.includeNestedFolders = n.getBooleanValue(); },
            "isSupported": n => { this.isSupported = n.getBooleanValue(); },
            "sourceFolderIds": n => { this.sourceFolderIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.filterQuery){
            writer.writeStringValue("filterQuery", this.filterQuery);
        }
        if(this.includeNestedFolders){
            writer.writeBooleanValue("includeNestedFolders", this.includeNestedFolders);
        }
        if(this.isSupported){
            writer.writeBooleanValue("isSupported", this.isSupported);
        }
        if(this.sourceFolderIds){
            writer.writeCollectionOfPrimitiveValues<string>("sourceFolderIds", this.sourceFolderIds);
        }
    };
}
