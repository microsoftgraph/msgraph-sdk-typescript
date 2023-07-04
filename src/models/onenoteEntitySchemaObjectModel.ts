import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel, Parsable {
    /**
     * The date and time when the page was created. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
}
