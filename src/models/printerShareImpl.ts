import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Group} from './group';
import {GroupImpl, PrinterBaseImpl, PrinterImpl, UserImpl} from './index';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterShareImpl extends PrinterBaseImpl implements Parsable, PrinterShare {
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties. */
    allowAllUsers?: boolean | undefined;
    /** The groups whose users have access to print using the printer. */
    allowedGroups?: Group[] | undefined;
    /** The users who have access to print using the printer. */
    allowedUsers?: User[] | undefined;
    /** The DateTimeOffset when the printer share was created. Read-only. */
    createdDateTime?: Date | undefined;
    /** The printer that this printer share is related to. */
    printer?: Printer | undefined;
    /**
     * Instantiates a new printerShare and sets the default values.
     * @param printerShareParameterValue 
     */
    public constructor(printerShareParameterValue?: PrinterShare | undefined) {
        super();
        this.allowAllUsers = printerShareParameterValue?.allowAllUsers ;
        this.allowedGroups = printerShareParameterValue?.allowedGroups ;
        this.allowedUsers = printerShareParameterValue?.allowedUsers ;
        this.createdDateTime = printerShareParameterValue?.createdDateTime ;
        this.printer = printerShareParameterValue?.printer ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowAllUsers": n => { this.allowAllUsers = n.getBooleanValue(); },
            "allowedGroups": n => { this.allowedGroups = n.getCollectionOfObjectValues<GroupImpl>(createGroupFromDiscriminatorValue); },
            "allowedUsers": n => { this.allowedUsers = n.getCollectionOfObjectValues<UserImpl>(createUserFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "printer": n => { this.printer = n.getObjectValue<PrinterImpl>(createPrinterFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowAllUsers){
        if(this.allowAllUsers)
        writer.writeBooleanValue("allowAllUsers", this.allowAllUsers);
        }
        if(this.allowedGroups){
        const allowedGroupsArrValue: GroupImpl[] = []; this.allowedGroups?.forEach(element => {allowedGroupsArrValue.push(new GroupImpl(element));});
        writer.writeCollectionOfObjectValues<GroupImpl>("allowedGroups", allowedGroupsArrValue);
        }
        if(this.allowedUsers){
        const allowedUsersArrValue: UserImpl[] = []; this.allowedUsers?.forEach(element => {allowedUsersArrValue.push(new UserImpl(element));});
        writer.writeCollectionOfObjectValues<UserImpl>("allowedUsers", allowedUsersArrValue);
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.printer){
        if(this.printer)
        writer.writeObjectValue<PrinterImpl>("printer", new PrinterImpl(this.printer));
        }
    };
}
